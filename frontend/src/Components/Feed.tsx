import { useEffect, useState } from "react";
import FeedsBar from "./FeedsBar";
import FeedDataService from '../services/feed.services'
import ItemDataService from '../services/item.services'
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import ModalArticle from "./ModalArticle";


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
  const [read, setRead] = useState(0)
  const readOneArticle = () => {
    setRead(read+1);
  }
    
  function retrieveItems(feed?: string) {
        feed ? FeedDataService.get(feed)
          .then((response: any) => {
            setItems(
              response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          }) : ItemDataService.getAll().then((response: any) => {
            setItems(
              response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          })
      };

    useEffect (() => {
        retrieveItems(slug);
        console.log("reload")
  }, [slug, read])
  return (
    <>

    



      <div className="listOfItem" style={{
  marginLeft: "10%",
}}>
        
      {items.filter((item) => !item.read).map((item) => {
        //<a href={`/item/${item.slug}`}><p className="title">{item.title}</p></a>
          return <div className="item" key={item.id}>
            <ModalArticle slug={item.slug} title={item.title} read={readOneArticle}/>
            <p className="read">Read : {String(item.read)}</p><div className="description"></div>
            </div>
        })}
      </div>
    </>
  )
}