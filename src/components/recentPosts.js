import React from "react"
import { Link } from "gatsby"
import { FaCheckCircle } from "react-icons/fa"

// components
import useRecentPosts from "../hooks/useRecentPosts"

const RecentPosts = () => {

    const recentPosts = useRecentPosts()

    return (
        <div className="mt-5">
            <h2>Entradas Recientes</h2>
            {recentPosts.map(post => {
                return <Link
                    key={post.id}
                    className="d-flex align-items-center mb-3"
                    to={`/post/${post.title}`}>
                    <FaCheckCircle className="mr-2" />
                    <p className="mb-0">{post.title}</p>
                </Link>
            })
            }
        </div>
    )
}

export default RecentPosts