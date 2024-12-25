import { PhoneIcon } from "lucide-react"

interface WhatsappButtonType {
    phoneNumber?: string
    message: string
}

export default function WhatsappButton({
    phoneNumber = "6281281849999",
    message,
}: WhatsappButtonType) {
    const encodedMessage = encodeURIComponent(message)
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    return (
        <a href={waLink} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-x-2 rounded-md bg-accent px-8 py-4 font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:bg-amber-600">
                <PhoneIcon size={20} /> <span>Hubungi Kami</span>
            </button>
        </a>
    )
}
