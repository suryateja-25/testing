import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          className="card-image"
          alt="card-img"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
        {cardInfo.footerLink ? (
                              <div className="card-footer">
                                {cardInfo.footerLink.map((link, i) => {
                                  return (
                                    <span
                                      key={i}
                                      className={
                                        isDark ? "dark-mode card-tag" : "card-tag"
                                      }
                                      onClick={() => openUrlInNewTab(link.url)}
                                    >
                                      {link.name}
                                    </span>
                                  );
                                })}
                              </div>
                            ) : null}
      </div>
    </div>
  );
}
