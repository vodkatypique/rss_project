import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import FeedDataService from '../services/feed.service'

interface FeedData {
    title: string;
    feed_url: string;
    slug: string;
  }

export default function FeedsBar() {
    const [feeds, setFeeds] = useState<FeedData[]>([])

    function retrieveFeeds() {
        FeedDataService.getAll()
          .then((response: any) => {
            setFeeds(
              response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };

    useEffect (() => {
        retrieveFeeds()
  }, [])

    return (
        <div className="listOfFeeds">
            <h1>Feeds</h1>
            <nav>
                <ul>
                <li key="all"><Link to={`/`}>All</Link></li>
                {feeds.map((feed) => {
                    return <li key={feed.slug}><Link to={`/feed/${feed.slug}`}>{feed.title}</Link></li>
                })}
                </ul>
            </nav>
        </div>
    )
  }