import Image from "next/image";
import css from "styled-jsx/css";

export interface CardProps {
    index?: number;
    title: string;
    href: string;
    picture?: string;
    targetBlank?: boolean;
}


export default function Card({ title, href, picture, targetBlank }: CardProps) {
    return <a href={href} target="_blank" className="aspect-[14/9] relative block" style={{ backgroundColor: stringToColor(title) }}>
        {picture && <Image src={picture} objectFit="cover" alt={title} fill={true} />}
        <div className="absolute bottom-0 left-0 right-0">
            <h2 className="text-sm sm:text-lg font-semibold text-white bg-opacity-40 bg-black block p-2">{title}</h2>
        </div>
    </a>
}

// export default function Card({ title, body, href, picture, targetBlank }: Props) {
//     return <li className="list-none flex p-[0.25rem] rounded-[0.6rem] object-cover shadow-xl h-[213px] relative overflow-hidden bg-cover" style={{ backgroundImage: `url(${picture})` }}>
//         <a href={href} target={targetBlank ? '_blank' : undefined} className="block absolute top-0 left-0 right-0 bottom-0 no-underline">
//             <div className="absolute left-0 right-0 bottom-0">
//                 <h2 className="m-0" style={{ fontSize: '1.25rem', transition: 'color 0.6s cubic-bezier(0.22, 1, 0.36, 1)' }}>
//                     {title}
//                     <span>&rarr;</span>
//                 </h2>
//                 <p className="mt-[0.1rem] mb-0" style={{ transition: 'color 0.6s cubic-bezier(0.22, 1, 0.36, 1)' }}>
//                     {body}
//                 </p>
//             </div>
//         </a>
//     </li>
// }


const stringToColor = (str: string) => {
    let hash = 0;
    str.split('').forEach(char => {
        hash = char.charCodeAt(0) + ((hash << 5) - hash)
    })
    let colour = '#'
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff
        colour += value.toString(16).padStart(2, '0')
    }
    return colour
}