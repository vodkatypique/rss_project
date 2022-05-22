import { useEffect, useState } from "react";
import FeedsBar from "./FeedsBar";
import ItemDataService from '../services/item.services'

interface ItemData {
    title: string;
    link: string;
    slug: string;
    description: string;
    read: boolean;
  }
  
  export default function Feed() {
    const [items, setItems] = useState<ItemData[]>([])
    function retrieveItems() {
        ItemDataService.getAll()
          .then((response: any) => {
            setItems(
              response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };

    useEffect (() => {
        retrieveItems()
  }, [])

    return (
      <>
        <FeedsBar/>
        <div className="listOfItem">
          {items.filter((item) => !item.read).map((item) => {
            return <div className="item" key={item.slug}><a href={`item/${item.slug}`}><p className="title">{item.title}</p></a><p className="read">Read : {String(item.read)}</p><div className="description"></div>
              </div>
          })}
        </div>
      </>
    )
  }