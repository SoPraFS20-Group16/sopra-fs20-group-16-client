import React, { Component } from "react";
import GameCard from "./GameCard";
import {Row, Col, Form, Button} from "react-bootstrap";
import {api, handleError} from "../../helpers/api";

export default class GameCard extends React.Component {

  constructor() {
    super();
    this.state = {
      games: null
    };
  }

  /**
   * HTTP GET request is sent to the backend by passing the user's token.
   * If the request is successful, the existing games are returned to the front-end.
   */
  async getGames() {
    try {
      // Get token from localStorage
      const token = localStorage.getItem('token')

      // Ask the server the games by passing the token and return if successful
      return await api.get("/games", token);


    } catch (error) {
      alert(`Something went wrong while fetching the existing matches: \n${handleError(error)}`);
    }
  }

}