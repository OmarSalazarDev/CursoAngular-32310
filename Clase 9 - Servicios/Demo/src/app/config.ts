import { InjectionToken } from "@angular/core";
import { AlumnoService } from './services/alumno.service';
import { CursoService } from "./services/curso.service";

// export interface Configuracion {
//   experimental: boolean;
//   servicios: any[];
// }

// export const config: Configuracion = {
//   experimental: true,
//   servicios: [
//     new CursoService(),
//     new AlumnoService()
//   ]
// }

export interface Configuracion {
  experimental: boolean;
  servicios: {
    cursos: CursoService;
    alumnos: AlumnoService;
  };
}

export const config: Configuracion = {
  experimental: true,
  servicios: {
    cursos: new CursoService(),
    alumnos: new AlumnoService()
  }
}

export const configtoken = new InjectionToken<Configuracion>('config');
