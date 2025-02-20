import { createContext, ReactNode, useEffect, useState } from "react";

interface Launch {
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
}

type ApiContextType = {
  upComingLaunches: Launch[];
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

  // 3 proveer en el return lo que queremos que se consuma en toda la app
  return (
    <ApiContext.Provider value={{ upComingLaunches }}>
      {children}
    </ApiContext.Provider>
  );
}
