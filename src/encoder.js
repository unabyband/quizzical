//This function may looks a bit strange and redundant, 
// but I had to write it in order to correct displaying of API's results.

export function encoder(str) {
    return str.replace(/&quot;/g,'"')
    .replace(/&#039;/g,"'")
    .replace(/&amp;/g,"&")
    .replace(/&eacute;/g,"é")
    .replace(/&ouml;/g,"ö")
    .replace(/&auml;/g,"ä")
    .replace(/&rsquo;/g,"`")
    .replace(/&oacute;/g,"ó")
    .replace(/&aring;/g,"å")
    .replace(/&divide;/g,"÷")
    .replace(/&ndash;/g,"–")
    .replace(/&ntilde;/g,"ñ")
    .replace(/&uuml;/g,"ü")
    .replace(/&iacute;/g,"í")
}