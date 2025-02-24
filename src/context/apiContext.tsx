import { createContext, ReactNode, useEffect, useState } from "react";

type Launch = {
  links: {
    patch: {
      small: string | null;
      large: string | null;
    };
    flickr: {
      small: string[];
      original: string[];
    };
    webcast: string;
    youtube_id: string;
    wikipedia: string | null;
  };
  rocket: string;
  name: string;
  date_utc: string;
  flight_number: number;
  upcoming: boolean;
  cores: {
    core: string;
    flight: number;
  }[];
  id: string;
};

type NextLaunch = {
  id: string;
  name: string;
  date_utc: string;
  flight_number: number;
  upcoming: boolean;
  rocket: string;
  links: {
    webcast: string;
    youtube_id: string;
  };
};

type Rocket = {
  name: string;
  type: string;
  flickr_images: string[];
  description: string;
  stages: number;
  boosters: number;
  first_flight: string;
};

type ApiContextType = {
  upComingLaunches: Launch[];
  nextLaunch: NextLaunch;
  rockets: Rocket[];
  filteredLaunches: Launch[];
  setSearchByTitle: (search: string) => void;
};

// 1 crear contexto
export const ApiContext = createContext<ApiContextType>({} as ApiContextType);

// 2 crear el provider con el children
export function ApiProvider({ children }: { children: ReactNode }) {
  // Estado para los lanzamientos
  const [upComingLaunches, setUpComingLaunches] = useState<Launch[]>([]); // Usamos Launch[] como tipo
  const upComingUrl = "https://api.spacexdata.com/v5/launches/upcoming";
  // Efecto para obtener los lanzamientos
  useEffect(() => {
    fetch(upComingUrl)
      .then((response) => response.json())
      .then((data) => setUpComingLaunches(data));
  }, []);

  //fetch para traer el proximo lanzamiento
  const [nextLaunch, setNextLaunch] = useState<NextLaunch>({
    id: "",
    name: "",
    date_utc: "",
    flight_number: 0,
    upcoming: false,
    rocket: "",
    links: {
      webcast: "",
      youtube_id: "",
    },
  }); // inicializo esto asi, porque sino typescript me deja las pelotas como 2 camiones
  const nextLaunchUrl = "https://api.spacexdata.com/v5/launches/next";
  useEffect(() => {
    fetch(nextLaunchUrl)
      .then((response) => response.json())
      .then((data) => setNextLaunch(data));
  }, []);

  const [rockets, setRockets] = useState<Rocket[]>([]);

  const rocketsUrl = "https://api.spacexdata.com/v4/rockets";

  useEffect(() => {
    fetch(rocketsUrl)
      .then((response) => response.json())
      .then((data) => setRockets(data));
  }, []);

  //tengo un estado para guardar los cambios del input
  const [searchByTitle, setSearchByTitle] = useState("");
  // aca filtro los lanzamientos con filter y retorno las coincidencias con el .includes (comparando en minusculas)
  // en el caso de que este vacio "", todos los filtrados del array de upComingLaunches son true, por lo tanto el filteredLaunches tiene todos los elementos de upComingLaunches
  const filteredLaunches = upComingLaunches.filter((launch) => {
    return launch.name.toLowerCase().includes(searchByTitle.toLowerCase());
  });

  // 3 proveer en el return lo que queremos que se consuma en toda la app
  return (
    <ApiContext.Provider
      value={{
        upComingLaunches,
        nextLaunch,
        rockets,
        filteredLaunches,
        setSearchByTitle,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
