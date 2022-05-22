import { useEffect, useState } from "react";
import FeedsBar from "./FeedsBar";
import FeedDataService from '../services/feed.service'
import { useParams } from "react-router-dom";


interface ItemData {
  title: string;
  link: string;
  slug: string;
  description: string;
  id: number;
  read: boolean;
}

export default function Feed() {
  const { slug } = useParams();
  const [items, setItems] = useState<ItemData[]>([])
    
  function retrieveItemsByFeed(feed: string) {
        FeedDataService.get(feed)
          .then((response: any) => {
            setItems(
              response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };

    useEffect (() => {
        retrieveItemsByFeed(slug || "")
  }, [])
  return (
    <>
      <FeedsBar/>
      <div className="listOfItem">
        
      {items.filter((item) => !item.read).map((item) => {
          return <div className="item" key={item.id}><a href={`/item/${item.slug}`}><p className="title">{item.title}</p></a><p className="read">Read : {String(item.read)}</p><div className="description"></div>
            </div>
        })}
      </div>
    </>
  )
}