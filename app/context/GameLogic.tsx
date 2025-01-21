"use client";
type Question = {
  QuestionText: string;
  FirstAnswer: string;
  SecondAnswer: string;
  ThirdAnswer: string;
  CorrectAnswer: number;
};
import React, { createContext, useContext, useState } from "react";

// Singleton Logic + Context
class GameLogic {
  private static instance: GameLogic;
  public contestants: string[] = [];
  public chasers: string[] = [];
  public questions: Question[] = [];

  private constructor() {}

  public static getInstance(): GameLogic {
    if (!GameLogic.instance) {
      GameLogic.instance = new GameLogic();
    }
    return GameLogic.instance;
  }

  public initialize(contestants: string[], questions: Question[]) {
    this.contestants = contestants;
    this.questions = questions;
  }

  public addContestants(contestant: string) {
    this.contestants.push(contestant);
  }

  public addQuestion(question: Question) {
    this.questions.push(question);
  }
}

// React Context
const GameContext = createContext<GameLogic | null>(null);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [gameInstance] = useState(() => {
    const instance = GameLogic.getInstance();
    return instance;
  });

  return (
    <GameContext.Provider value={gameInstance}>{children}</GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
