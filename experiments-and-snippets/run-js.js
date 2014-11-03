// this will run code entered into the various buckets
// use this when adding live coding and a terminal to the 
// Zombie Floss website
function runJs() {
    var html, htmlBucket, css, cssBucket, js, jsBucket, code, iframe, doc;
 
    htmlBucket = document.getElementById('code-preview-html-bucket');
    cssBucket = document.getElementById('code-preview-css-bucket');
    jsBucket = document.getElementById('js-code-bucket');
 
    html = htmlBucket.getValue();
    css = cssBucket.getValue();
    js = '<script type="text/javascript">' + jsBucket.getValue() + '</script>';
 
    code = '<html><head><style>' + css + '</style></head><body>' + html + js + '</body></html>';
    iframe = document.getElementById('code-preview-preview');
 
    doc = iframe.contentDocument || iframe.contentWindow.document;
 
    doc.open();
    doc.writeln(code);
    doc.close();
}