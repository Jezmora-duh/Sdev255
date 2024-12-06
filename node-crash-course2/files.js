const fs = require ('fs');

//fs.writeFile('./docs/blog1.txt', 'hello,world', () => {
 //   console.log('file was written')
//})

if (!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder was created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    })    
}

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err ) => {
        if (err) {
            console.log(err)
        }
        console.log('file was deleted');
    })
}