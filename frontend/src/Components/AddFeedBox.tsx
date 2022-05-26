import { useState } from "react";
import jwt_decode from 'jwt-decode';
import FeedDataService from "../services/feed.services";

function getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  function slugify(text: string) {
    return text
      .toString()                           // Cast to string (optional)
      .normalize('NFKD')            // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
      .toLowerCase()                  // Convert the string to lowercase letters
      .trim()                                  // Remove whitespace from both sides of a string (optional)
      .replace(/\s+/g, '-')            // Replace spaces with -
      .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
      .replace(/\-\-+/g, '-');        // Replace multiple - with single -
  }

export default function Login(){
    const [isSubmitted, setIsSubmitted] = useState(false);
    

    const renderForm = (
        <div className="form">
          <form   onSubmit={(e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      url: { value: string };
    };
    const title = target.title.value; // typechecks!
    const feed_url = target.url.value; // typechecks!
    const jwt = JSON.parse(localStorage.getItem('jwt') ?? "").access
    const feeders = [getDecodedAccessToken(jwt).user_id]
    const slug = slugify(title)
    FeedDataService.create({title, feed_url, feeders, slug }) 
  }}>
            <div className="input-container">
              <label>title </label>
              <input type="text" name="title" required />
            </div>
            <div className="input-container">
              <label>url </label>
              <input type="text" name="url" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );

      return (
        
          <div className="login-form">
            <div className="title">Add Feed</div>
            {isSubmitted ? <div>created</div> : renderForm}
          </div>
        
      );
}