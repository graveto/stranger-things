import React from "react";
import "./description.styles.css";

const Description = props => {
  return (
    <div className="Description">
      <h3>
        Where do you think all the
        <strong>
          <em>&laquo;strangeness&raquo;</em>
        </strong>
        came from? Hawkins, IN? Bermuda Triangle? Try Durham, NC.
        {props.data.description}
      </h3>
      <a
        href="https://www.rtp.org/company/ibm-corporation/"
        target="blank"
        rel="noopener noreferrer"
      >
        If you want to see stranger things then visit us at RTP.
      </a>
      <section>
        <div>
          <h2>What's the Big Deal?</h2>
          <p>{props.data.snippets[1]}</p>
          <p>{props.data.snippets[2]}</p>
        </div>
        <div>
          <h2>See the Places</h2>
          <p>Some of the places you may recognize are:</p>
          <ul>
            {props.data.locations.map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
          <div
            className="video"
            style={{
              position: "relative",
              paddingBottom: "56.25%" /* 16:9 */,
              paddingTop: 25,
              height: 0
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              src={props.data["video-embed"]}
              frameBorder="0"
              title="Stranger Things NC locations"
            />
          </div>
        </div>
        <div>
          <h2>Words of Wisdom</h2>
          <p>{props.data.snippets[0]}</p>
          <p>{`${props.data.quote.text} - ${props.data.quote.author}`}</p>
        </div>
      </section>
    </div>
  );
};

export default Description;
