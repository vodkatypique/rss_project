import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FeedDataService from '../services/feed.services'
import Login from "./Login";
import NewUser from "./NewUser";

interface FeedData {
    title: string;
    feed_url: string;
    slug: string;
  }

export default function FeedsBar() {
    const [feeds, setFeeds] = useState<FeedData[]>([])
    const [isFetching, setIsFetching] = useState(false);

    function retrieveFeeds() {
      console.log("retrieve")
      FeedDataService.getAll()
        .then((response: any) => {
          setFeeds(
            response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    };
    
    useEffect(() => {
      if (isFetching) {
        FeedDataService.refetchData().then(() => {
          setIsFetching(false);
          retrieveFeeds()
        });
      }
    }, [isFetching]);
  
    const handleClick = () => setIsFetching(true);

    

    useEffect (() => {
        retrieveFeeds()
  }, [])

    return (
        <div className="listOfFeeds">
            <h1>Feeds</h1>
            <Login/>
            <NewUser/>
            <Button
        variant="primary"
        disabled={isFetching}
        onClick={!isFetching ? handleClick : undefined}
      >
        {isFetching ? 'Loading…' : 'Click to load'}
      </Button>
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