let viewerUrl = `./assets/pdfjs/web/viewer.html`;
const fileUrl = `../../../assets/resume.pdf`;
const iframe = document.getElementById('web-viewer');

viewerUrl += `?file=${fileUrl}`;

iframe.src = viewerUrl;

iframe.addEventListener('load', e => {
    const { PDFViewerApplication } = iframe.contentWindow;
    const { appConfig } = PDFViewerApplication;
    appConfig.toolbar.openFile.hidden = true;
    appConfig.toolbar.viewBookmark.hidden = true;
    PDFViewerApplication.setTitleUsingUrl('Ryan Angeles.pdf');
})