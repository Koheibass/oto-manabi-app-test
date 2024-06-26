import BottomNav from "@/components/BottomNav";
import Search from "@/components/Search";
import { client } from "@/libs/client";
import Link from "next/link";

export default function QuestionContent({ contents }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <nav>
                <div>
                    <span className="flex items-center justify-center">
                        <img src="/photo/questionphoto1.png" width="50%" />
                    </span>
                </div>
            </nav>
            <main>
                <Search />
                <ul className="py-4 px-2 pb-14">
                    {contents.map((content) => (
                        <li className="flex my-4 divide-y-2" key={content.id}>
                            <Link href={content.videoUrl}>
                                <img className="w-[180px]" src={content.thumbnail.url} alt={content.question} />
                            </Link>
                            <Link className="pl-2" href={content.videoUrl}>{content.question}</Link>
                        </li>
                    ))}
                </ul>
            </main>

            <div>
                <BottomNav />
            </div>
        </div>
    )
}

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