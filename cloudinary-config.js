/**
 * Cloudinary Upload Configuration
 * 
 * WICHTIG: Cloudinary Account erstellen unter https://cloudinary.com
 * 
 * 1. Registriere dich bei Cloudinary (kostenlos)
 * 2. Gehe zu Settings > Upload
 * 3. Aktiviere "Unsigned uploading"
 * 4. Erstelle einen Upload Preset (z.B. "eatos_documents")
 * 5. Trage unten deine Werte ein
 */

const CLOUDINARY_CONFIG = {
    // Dein Cloudinary Cloud Name (findest du im Dashboard)
    cloudName: 'YOUR_CLOUD_NAME', // z.B. 'dxyz1234'
    
    // Dein Upload Preset für unsigned uploads (Settings > Upload > Upload presets)
    uploadPreset: 'YOUR_UPLOAD_PRESET', // z.B. 'eatos_documents'
    
    // Upload URL
    uploadUrl: 'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload',
    
    // Optionale Einstellungen
    maxFileSize: 10 * 1024 * 1024, // 10MB max
    allowedFormats: ['jpg', 'jpeg', 'png', 'pdf', 'doc', 'docx']
};

/**
 * Upload file to Cloudinary
 * @param {File} file - The file to upload
 * @param {string} folder - Optional folder name in Cloudinary
 * @returns {Promise<object>} Upload response with URL and public_id
 */
async function uploadToCloudinary(file, folder = 'eatos-documents') {
    if (!file) {
        throw new Error('Keine Datei ausgewählt');
    }
    
    // Validate file size
    if (file.size > CLOUDINARY_CONFIG.maxFileSize) {
        throw new Error(`Datei zu groß. Maximum: ${CLOUDINARY_CONFIG.maxFileSize / 1024 / 1024}MB`);
    }
    
    // Validate file format
    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (!CLOUDINARY_CONFIG.allowedFormats.includes(fileExtension)) {
        throw new Error(`Dateiformat nicht erlaubt. Erlaubt: ${CLOUDINARY_CONFIG.allowedFormats.join(', ')}`);
    }
    
    // Prepare form data
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
    formData.append('folder', folder);
    
    // Upload to Cloudinary
    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/upload`,
        {
            method: 'POST',
            body: formData
        }
    );
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Upload fehlgeschlagen');
    }
    
    const data = await response.json();
    
    return {
        url: data.secure_url,
        publicId: data.public_id,
        format: data.format,
        size: data.bytes,
        width: data.width,
        height: data.height,
        originalFilename: file.name
    };
}

/**
 * Delete file from Cloudinary
 * Note: This requires server-side implementation with your API secret
 * For now, files remain in Cloudinary (can be deleted manually)
 */
async function deleteFromCloudinary(publicId) {
    console.warn('Cloudinary deletion requires server-side implementation with API secret');
    console.log('Public ID to delete:', publicId);
    // This would need to be done via a backend API endpoint
    return false;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CLOUDINARY_CONFIG,
        uploadToCloudinary,
        deleteFromCloudinary
    };
}
