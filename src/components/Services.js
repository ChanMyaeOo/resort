import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends React.Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        icon: <FaHiking />,
        title: "endless hikings",
        info:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
