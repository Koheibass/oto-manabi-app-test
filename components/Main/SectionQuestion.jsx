import Link from "next/link";
import { client } from "../../libs/client";

export default function SectionQuestion({ contents }) {
    return (
        <div>
            <Link href='/Maincontents/questioncontent'><span className="flex items-center justify-center border border-black border-dashed">
                <img src="/photo/questionphoto.png" width="50%" />
            </span></Link>
            <ul>
                {contents.map((content) => (
                    <li key={content.id}>
                        <Link href={content.videoUrl}>
                            <img className="w-40" src={content.thumbnail.url} alt={content.name} />
                            {content.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const getStaticProps = async () => {
    const data = await client.get({
        endpoint: "content", queries: { filters: 'type[contains]質問Liveアーカイヴ' }
    })

    return {
        props: {
            contents: data.contents,
        },

    };
};