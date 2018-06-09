import CMS from 'netlify-cms'

// import HomePagePreview from './preview-templates/HomePagePreview'
import SupportPagePreview from './preview-templates/SupportPagePreview'
// import BlogPagePreview from './preview-templates/BlogPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewStyle('/styles.css')
// CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('support', SupportPagePreview)
// CMS.registerPreviewTemplate('blog', BlogPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
