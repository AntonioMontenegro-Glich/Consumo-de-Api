const fetchSpells = async () => {
    try {
        const res = await fetch('https://potterapi-fedeperin.vercel.app/en/spells');
        const spells = await res.json();
        return spells;
    } catch (error) {
        console.error('Erro ao buscar feitiços:', error);
    }
};

const fetchCharacters = async () => {
    try {
        const res = await fetch('https://potterapi-fedeperin.vercel.app/es/characters?search=Weasley');
        const characters = await res.json();
        return characters;
    } catch (error) {
        console.error('Erro ao buscar personagens:', error);
    }
};

const main = async () => {
    const spells = await fetchSpells();
    console.log('Feitiços:', spells);

    const characters = await fetchCharacters();
    console.log('Personagens:', characters);
};

main();





