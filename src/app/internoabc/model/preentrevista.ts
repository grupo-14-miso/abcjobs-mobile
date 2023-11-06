export type PreEntrevistas = PreEntrevista[]

export class PreEntrevista {
  key: Key
  pre_interview: PreInterview
  candidate: Candidate
  constructor(key: Key, pre_interview: PreInterview, candidate: Candidate) {
    this.key = key
    this.pre_interview = pre_interview
    this.candidate = candidate
  }
}

export class Key {
  kind: string
  id: number
  constructor(kind: string, id: number) {
    this.kind = kind
    this.id = id
  }
}

export class PreInterview {
  id_company: string
  id_candidate: string
  id_offer: string
  status: string
  constructor(id_company: string, id_candidate: string, id_offer: string, status: string) {
    this.id_company = id_company
    this.id_candidate = id_candidate
    this.id_offer = id_offer
    this.status = status
  }
}
export class Candidate {
  tecnologias_herramientas: string[]
  Nombre: string
  apellido: string
  genero: string
  rol: string[]
  idiomas: Idioma[]
  estado_civil: string
  lenguajes_programacion: string[]
  ciudad_nacimiento: string
  educacion: Educacion[]
  segundo_nombre: string
  nacionalidad: string
  documento: string
  password: string
  telefono: string
  id_candidato: string
  experiencia: Experiencum[]
  ciudad_residencia: string
  segundo_apellido: string
  pais_nacimiento: string
  fecha_nacimiento: string
  soft_skills: string[]
  pais_residencia: string
  email: string
  tipo_documento: string
  constructor(tecnologias_herramientas: string[], Nombre: string, apellido: string, genero: string, rol: string[], idiomas: Idioma[], estado_civil: string, lenguajes_programacion: string[], ciudad_nacimiento: string, educacion: Educacion[], segundo_nombre: string, nacionalidad: string, documento: string, password: string, telefono: string, id_candidato: string, experiencia: Experiencum[], ciudad_residencia: string, segundo_apellido: string, pais_nacimiento: string, fecha_nacimiento: string, soft_skills: string[], pais_residencia: string, email: string, tipo_documento: string) {
    this.tecnologias_herramientas = tecnologias_herramientas
    this.Nombre = Nombre
    this.apellido = apellido
    this.genero = genero
    this.rol = rol
    this.idiomas = idiomas
    this.estado_civil = estado_civil
    this.lenguajes_programacion = lenguajes_programacion
    this.ciudad_nacimiento = ciudad_nacimiento
    this.educacion = educacion
    this.segundo_nombre = segundo_nombre
    this.nacionalidad = nacionalidad
    this.documento = documento
    this.password = password
    this.telefono = telefono
    this.id_candidato = id_candidato
    this.experiencia = experiencia
    this.ciudad_residencia = ciudad_residencia
    this.segundo_apellido = segundo_apellido
    this.pais_nacimiento = pais_nacimiento
    this.fecha_nacimiento = fecha_nacimiento
    this.soft_skills = soft_skills
    this.pais_residencia = pais_residencia
    this.email = email
    this.tipo_documento = tipo_documento
  }
}

export class Idioma {
  idioma: string
  nivel_escritura: number
  fecha_certificacion: string
  nivel_lectura: number
  nivel_conversacion: number
  nativo: string
  constructor(idioma: string, nivel_escritura: number, fecha_certificacion: string, nivel_lectura: number, nivel_conversacion: number, nativo: string) {
    this.idioma = idioma
    this.nivel_escritura = nivel_escritura
    this.fecha_certificacion = fecha_certificacion
    this.nivel_lectura = nivel_lectura
    this.nivel_conversacion = nivel_conversacion
    this.nativo = nativo
  }
}

export class Educacion {
  institucion: string
  tecnologias_herramientas: string[]
  lenguajes_programacion: string[]
  titulo_obtenido: string
  fecha_inicio: string
  fecha_fin: string
  rol: string
  nivel_academico: string

  constructor(institucion: string, tecnologias_herramientas: string[], lenguajes_programacion: string[], titulo_obtenido: string, fecha_inicio: string, fecha_fin: string, rol: string, nivel_academico: string) {
    this.institucion = institucion
    this.tecnologias_herramientas = tecnologias_herramientas
    this.lenguajes_programacion = lenguajes_programacion
    this.titulo_obtenido = titulo_obtenido
    this.fecha_inicio = fecha_inicio
    this.fecha_fin = fecha_fin
    this.rol = rol
    this.nivel_academico = nivel_academico
  }
}

export class Experiencum {
  pais: string
  empresa: string
  rol: string
  fecha_fin: string
  fecha_inicio: string
  ciudad: string
  cargo: string
  constructor(pais: string, empresa: string, rol: string, fecha_fin: string, fecha_inicio: string, ciudad: string, cargo: string) {
    this.pais = pais
    this.empresa = empresa
    this.rol = rol
    this.fecha_fin = fecha_fin
    this.fecha_inicio = fecha_inicio
    this.ciudad = ciudad
    this.cargo = cargo
  }
}

export type Companys = Company[]

export class Company {
  company_id: number
  country: string
  created_date: string
  document_number: string
  document_type: string
  email: string
  last_modified: string
  name: string
  phone_number: string
  constructor(company_id: number, country: string, created_date: string, document_number: string, document_type: string, email: string, last_modified: string, name: string, phone_number: string) {
    this.company_id = company_id
    this.country = country
    this.created_date = created_date
    this.document_number = document_number
    this.document_type = document_type
    this.email = email
    this.last_modified = last_modified
    this.name = name
    this.phone_number = phone_number
  }

}

export type Ofertas = Oferta[]

export class Oferta {
  company_id: string
  created_date: string
  description: string
  end_date: string
  last_modified: string
  name: string
  offer_id: number
  start_date: string
  constructor(company_id: string, created_date: string, description: string, end_date: string, last_modified: string, name: string, offer_id: number, start_date: string) {
    this.company_id = company_id
    this.created_date = created_date
    this.description = description
    this.end_date = end_date
    this.last_modified = last_modified
    this.name = name
    this.offer_id = offer_id
    this.start_date = start_date
  }
}

export class Entrevista {
  id_company: string
  candidates: string[]
  id_offer: string
  link: string
  date: string
  description: string
  id?: number
  candidates_details?: CandidatesDetail[]
  result?: string
  constructor(
    id_company: string,
    candidates: string[],
    id_offer: string,
    link: string,
    date: string,
    description: string,

  ) {
    this.candidates = candidates
    this.date = date
    this.description = description
    this.id_company = id_company
    this.id_offer = id_offer
    this.link = link

  }

}

export class CandidatesDetail {
  candidate: Candidate
  company: Company
  offer: Oferta
  constructor(candidate: Candidate, company: Company, offer: Oferta) {
    this.candidate = candidate
    this.company = company
    this.offer = offer
  }

}






