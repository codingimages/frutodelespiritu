import React from "react"
import { Link } from "gatsby"

// components
import useRecentPosts from "../hooks/useRecentPosts"

const RecentPosts = () => {

    const recentPost = useRecentPosts()

    return (
        <div className="mt-5">
            <h2 className="mb-3">Entradas Recientes</h2>
            {recentPost.map(post => {
                return <Link
                    key={post.id}
                    className="d-flex align-items-center mb-3"
                    to={`/${post.title}`}>
                    <p className="mb-0">{post.title} <br />
                        <span className="text-secondary"><sup>{post.categories}</sup></span></p>
                </Link>
            })
            }
        </div>
    )
}

export default RecentPosts