// commande d'information sur le code source sur les applications Astron

const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Affiche la liste des applications Astron et leurs dépôts GitHub'),
    
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle("🌌 Astron Suite - Open Source Apps")
            .setDescription("Voici la liste des applications disponibles dans l'écosystème **Astron**, développées par Sky Genesis Enterprise.")
            .setColor("#5865F2")
            .setFooter({ text: "Astron by Sky Genesis Enterprise", iconURL: interaction.client.user.displayAvatarURL() })
            .setTimestamp();

        embed.addFields(
            { name: "🧩 Astron Core", value: "[GitHub Repo](https://github.com/Sky-Genesis-Enterprise/astron)" },
            { name: "🛡️ Astron Protect", value: "[GitHub Repo](https://github.com/Sky-Genesis-Enterprise/astron-protect)" },
            { name: "📜 Astron Logger", value: "[GitHub Repo](https://github.com/Sky-Genesis-Enterprise/astron-logger)" },
            { name: "🎵 Astron Player", value: "[GitHub Repo](https://github.com/Sky-Genesis-Enterprise/astron-player)" },
            { name: "📬 Astron Modmail", value: "[GitHub Repo](https://github.com/Sky-Genesis-Enterprise/astron-modmail)" },
            { name: "📊 Guild Center", value: "[GitHub Repo](https://github.com/Sky-Genesis-Enterprise/guild-center)" },
            { name: "🌐 Dashboard Web", value: "[GitHub Repo](https://github.com/Sky-Genesis-Enterprise/astron-dashboard)" }
        );

        return interaction.reply({ embeds: [embed], ephemeral: false });
    },
};