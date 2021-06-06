const fs = require('fs');

const infos = JSON.parse(fs.readFileSync('./data/settings.json'))
const { prefix, ownerName, ownerNumber, cdd, ammOff, cr, crfig, crlv, crtt, crh } = infos
 
exports.wait = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nCaso não funcione, que se foda`
}

exports.tterro = () => {
	return `Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`
}

exports.waitmusic = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, que se foda.`
}

exports.waitfig = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA criação de stickers demora um tempinho.`
}

exports.waitgif = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA criação de stickers demora alguns segundos\nA criação de stickergif leva de 10 segundos á 1 minuto dependendo do tamanho do gif\nLimite de 10 segundos por gif.`
}

exports.waitsfw = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar o hentai em até 2 minutos\nTente novamente caso não envie.`
}

exports.waitpor = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar a img\nTente novamente caso não envie.`
}

exports.waitimg= () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar criar e enviar a imagem\nO processo dura no mínimo 10 segundos\nTente novamente caso não envie.`
}

exports.success = () => {
	return`✅prontinho✅`
}

exports.levelon = () => {
	return`✅função leveis foi ativada✅`
}

exports.leveloff = () => {
	return`❌função leveis foi desativada❌`
}

exports.levelnoton = () => {
	return`🚫A função leveis está desativada🚫`
}

exports.levelnol = () => {
	return`Você está level 0... \njá se registrou para começar ganhar XP?`
}

exports.ban = () => {
	return`é amigão, tu se fudeu👌🏻`
}

exports.stick = () => {
	return`❌Ocorreu um erro na criação de sticker❌`
}

exports.Lv = () => {
	return`❌Link inválido❌`
}

exports.group = () => {
	return`❌O comando só pode ser usado em grupos❌`
}

exports.ownerG = (ownerName) => {
	return`O comando só pode ser usado pelo ${ownerName}🕴`
}

exports.lia = () => {
	return`Só a Lia pode usar😳👌`
}

exports.ownerB = (ownerName) => {
	return`O comando só pode ser usado pelo ${ownerName}🕴`
}

exports.admin = () => {
	return`❌O comando só pode ser usado por adm seu inútil`
}

exports.Badmin = () => {
	return`coe cara, preciso do adm pra usar esse comando'`
}

exports.registrarB = (pushname, prefix) => {
	return`Olá ${pushname}\n\nVocê ainda não se registrou...\n\nPara se registrar e poder usar todos os comandos do bot, por favor use:\n\nComando: ${prefix}registrar seu nome|sua idade\nPor exemplo: ${prefix}registrar Italu|17`
}

exports.nsfw = () => {
	return`comando safado desativado 👀`
}

exports.erro = () => {
	return`❌ocorreu um erro❌\n\nTente novamente.`
}


