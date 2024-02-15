import styles from "../page.module.css";



export default function ProjectCard({ title, description, techs, git_url }: { title: string, description: string, techs: string[], git_url: string }) {
    return <div className={styles.projectCard}>
        <h1 style={{fontSize: "32px"}}>Spotify</h1>
        <p className={styles.desc_project}>{description.length > 240 ? description.substring(0, 240) : description}</p>

        <div style={{display: "flex", marginTop: '32px', color: "#2D4CEE", }}>
            {techs.map((x, index)=>{
                console.log(index + 1 < techs.length)
                return <p style={{marginRight: "5px",  fontSize: "15px"}}>{x}{(index + 1) < techs.length ? " |" : ""}</p>
            })}
        </div>
        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', position: "absolute", bottom: 16, width: "100%", height: "40px", marginLeft: "-20px", padding: "20px"}}>
            <button style={{ color: "white", borderRadius: "10px", width: "120px", height: "30px", border: "0px", cursor: "pointer", backgroundColor: "#2D4CEE" }}>View Demo</button>
            <a href={git_url}><img src="/icons/git.png" style={{width: "20px", height: "20px"}} /></a>
        </div>
    </div>
}