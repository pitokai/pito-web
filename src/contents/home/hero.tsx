import { Button } from "../../components";
import { ArrowDown } from "phosphor-react";

export function HomeHero() {
  return (
    <div className="layout mx-auto px-5 flex flex-wrap gap-5 pt-10 md:pt-20 pb-10">
      <div className="max-w-[600px] space-y-5">
        <header className="space-y-2">
          <h2 className="text-2xl font-bold text-teal-500">Belajar Otodidak</h2>
          <h1 className="text-5xl font-bold text-slate-800">
            Menguasai FrontEnd Web Development
          </h1>
        </header>
        <div className="space-y-2 text-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            veritatis
          </p>
          <p>
            eveniet laboriosam facilis culpa dolores cumque. Nam error
            consequuntur
          </p>
          <p>
            temporibus laborum sed esse id, asperiores hic tempore. Animi,
            labore aliquid?
          </p>
        </div>
        <div>
          <Button className="flex items-center gap-2">
            Selengkapnya <ArrowDown weight="bold" />
          </Button>
        </div>
      </div>
      <div>
        <img
          className="max-h-[400px]"
          src="https://program.codepolitan.com/wp-content/uploads/sites/2/2022/05/sample.png"
          alt="err"
        />
      </div>
    </div>
  );
}
