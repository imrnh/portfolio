import Image from "next/image";
import styles from "../page.module.css";


export default function BlogCard({title, image}: {title: string, image: string}){
    return <div className={styles.blog_card}>
        <img src={image} alt="Image" style={{width: "100%", aspectRatio: 1.6, borderRadius: '5px'}}/>
        <p style={{marginTop: "10px", fontWeight: "400", fontSize: "20px", color: "white"}}>{title.length < 55 ? title : title.substring(0, 55) + "..."}</p>
    </div>
}