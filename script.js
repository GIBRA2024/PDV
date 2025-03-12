function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Cardona;Juan;Carlos;;
FN:Juan Carlos Cardona
TEL:+57 3156978120
EMAIL;TYPE=WORK: jcc.cardonac@gmail.com
ADR;TYPE=WORK:;;Cra. 29b #11-90;Acopi;Yumbo;;Colombia
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
