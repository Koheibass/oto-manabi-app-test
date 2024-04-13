import Link from "next/link"

export default function SectionColumn() {
    return (
        <div className="pl-">
            <Link href='Maincontents/columncontent'><span className="flex items-center justify-center">
                <img src="/photo/columnPhoto1.png" width="50%" />
            </span></Link>
        </div>
    )
}