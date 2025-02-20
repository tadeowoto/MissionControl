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

type ApiContextType = {
  upComingLaunches: Launch[];
  nextLaunch: NextLaunch;
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

  // 3 proveer en el return lo que queremos que se consuma en toda la app
  return (
    <ApiContext.Provider value={{ upComingLaunches, nextLaunch }}>
      {children}
    </ApiContext.Provider>
  );
}
