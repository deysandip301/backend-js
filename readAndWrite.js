const fs = require('fs').promises;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fileName = 'test.txt';

async function main() {
    try {
        const data = await fs.readFile(fileName, 'utf8');
        console.log(`Content of ${fileName}: \n${data}`);
        rl.question('Do you want to append or overwrite the file? (append/overwrite): ', async (action) => {
            rl.question('Enter the data to write to the file: ', async (inputData) => {
                try {
                    if (action === 'append') {
                        await fs.appendFile(fileName, inputData);
                        console.log('Data successfully appended to file');
                    } else if (action === 'overwrite') {
                        await fs.writeFile(fileName, inputData);
                        console.log('Data successfully written to file');
                    } else {
                        console.error('Invalid action. Please enter either "append" or "overwrite".');
                    }
                } catch (err) {
                    console.error(`Error writing data to file: ${err}`);
                }
                rl.close();
            });
        });
    } catch (err) {
        console.error(`Error reading file from disk: ${err}`);
    }
}

main();