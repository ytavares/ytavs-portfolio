import { ReactNode } from "react";

export interface SkillsProps {
  /**
   * Determina o subtitulo da seção de skills
   */
  subtitle?: string;

  /**
   * Determina o titulo da seção de skills
   */
  title?: string;

  /**
   * Determina a descrição da seção de skills
   */
  description?: string;

  /**
   * Determina os icones de skills
   */
  skills?: Skill[];
}

export interface Skill {
  /**
   * Determina o titulo da skill
   */
  title?: string;

  /**
   * Determina o icone da skill
   */
  icon?: ReactNode;
}