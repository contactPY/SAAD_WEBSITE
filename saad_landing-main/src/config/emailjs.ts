// EmailJS Configuration
// Replace these with your actual EmailJS credentials
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // e.g., 'service_abc123'
  TEMPLATE_ID_OWNER: 'YOUR_TEMPLATE_ID_OWNER', // Template for SAAD team notification
  TEMPLATE_ID_SENDER: 'YOUR_TEMPLATE_ID_SENDER', // Template for sender confirmation
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // e.g., 'user_abc123xyz'
};

// Template parameter mapping for owner notification
export const getOwnerTemplateParams = (formData: {
  name: string;
  email: string;
  message: string;
}) => ({
  from_name: formData.name,
  from_email: formData.email,
  message: formData.message,
  to_name: 'SAAD Team',
  reply_to: formData.email,
});

// Template parameter mapping for sender confirmation
export const getSenderTemplateParams = (formData: {
  name: string;
  email: string;
  message: string;
}) => ({
  to_name: formData.name,
  to_email: formData.email,
  message_preview: formData.message.substring(0, 100) + (formData.message.length > 100 ? '...' : ''),
  from_name: 'SAAD Team',
  reply_to: 'saadnmiet@gmail.com',
});
