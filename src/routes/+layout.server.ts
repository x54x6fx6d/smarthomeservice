import axios, {type AxiosRequestConfig } from "axios";
import { LOGGING_WEBHOOK } from "$env/static/private"

// @ts-ignore
export async function load({cookies, url, request, getClientAddress}) {
    let ip = request.headers.get("cf-connecting-ip") || getClientAddress()
    if (ip.substring(0, 7) == "::ffff:") {
        ip = ip.substring(7)
    }
    
    const embed_raw = {
        embeds: [{
            title: "User action logged!",
            fields:[
                {
                    name: "Path",
                    value: url.pathname
                },
                {
                    name: "IP Address",
                    value: ip
                }
            ]
        }]
    }
    axios.post(LOGGING_WEBHOOK, embed_raw)
    .catch(
        console.log
    )
    return {};
}

