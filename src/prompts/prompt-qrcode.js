
import chalk from "chalk";
import prompt from "prompt";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow.bold(`Digite o link para gerar o QR Code`),

    },
    {
        name: "type",
        description: chalk.yellow.bold(`Escolha entre o tipo de QR Code (1 - NORMAL ou 2 - TERMINAL)`),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic(`Escolha apenas entre 1 e 2`),
        required: true
    }
];

export default promptQRCode;