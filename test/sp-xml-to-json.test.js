const { exec } = require('child_process');

test('converts XML to JSON using command line tool', (done) => {
    const xml = '<book><title>The Great Gatsby</title><author>F. Scott Fitzgerald</author></book>';
    const expectedJson = {
        book: {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald'
        }
    };
    console.log('Command is : sp-xml-to-json "' + xml + '"');
    exec('sp-xml-to-json "' +xml + '"', (error, stdout, stderr) => {
        if (error) {
            done(error);
        } else if (stderr) {
            done(new Error(stderr));
        } else {
            const actualJson = JSON.parse(stdout);
            expect(actualJson).toEqual(expectedJson);
            done();
        }
    });
});
