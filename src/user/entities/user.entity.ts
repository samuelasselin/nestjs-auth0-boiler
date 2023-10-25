import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MenuPreference } from '../../menu-preferences/entities/menu-preference.entity';
import { Recipe } from '../../recipe/entities/recipe.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  auth0_id: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => MenuPreference, (menuPreference) => menuPreference.user)
  menuPreferences: MenuPreference[];

  @OneToMany(() => Recipe, (recipe) => recipe.user)
  recipes: Recipe[];
}
