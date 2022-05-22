import { useEffect, useState } from "react";
import FeedsBar from "./FeedsBar";
import ItemDataService from '../services/item.services'
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
  const [item, setItems] = useState<ItemData>()
    
  function retrieveItemAndRead(slug: string) {
        ItemDataService.get(slug)
          .then((response: any) => {
            setItems(
              response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
        ItemDataService.read(slug);
      };

    useEffect (() => {
        retrieveItemAndRead(slug || "")
  }, [])
  return (
    <>
      <FeedsBar/>
      <div className="item">
        read article
      </div>
    </>
  )
}