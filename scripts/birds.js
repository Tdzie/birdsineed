const birdsNeeded = {
    "Cappa": [
        /* ... Cappa's bird names ... */
        "Colinus virginianus",
        "Columbina inca",
        "Columbina passerina",
        "Ammospiza caudacuta",
        "Dendrocygna autumnalis",
        "Dendrocygna bicolor",
        "Anser caerulescens",
        "Anser rossii",
        "Anser anser",
        "Rallus limicola",
        "Anser albifrons",
        "Anser brachyrhynchus",
        "Branta bernicla",
        "Porphyrio martinica",
        "Branta leucopsis",
        "Branta canadensis",
        "Cygnus olor",
        "Cygnus buccinator",
        "Alopochen aegyptiaca",
        "Aix sponsa",
        "Spatula discors",
        "Spatula clypeata",
        "Mareca strepera",
        "Mareca penelope",
        "Mareca americana",
        "Anas platyrhynchos",
        "Anas rubripes",
        "Anas fulvigula",
        "Anas acuta",
        "Anas crecca",
        "Aythya valisineria",
        "Aythya americana",
        "Aythya ferina",
        "Aythya collaris",
        "Aythya fuligula",
        "Aythya marila",
        "Aythya affinis",
        "Somateria mollissima",
        "Histrionicus histrionicus",
        "Melanitta perspicillata",
        "Melanitta deglandi",
        "Melanitta americana",
        "Clangula hyemalis",
        "Bucephala albeola",
        "Bucephala clangula",
        "Bucephala islandica",
        "Lophodytes cucullatus",
        "Mergus merganser",
        "Mergus serrator",
        "Oxyura jamaicensis",
        "Meleagris gallopavo",
        "Podilymbus podiceps",
        "Podiceps auritus",
        "Columba livia",
        "Streptopelia decaocto",
        "Zenaida asiatica",
        "Zenaida macroura",
        "Coccyzus americanus",
        "Coccyzus erythropthalmus",
        "Chordeiles minor",
        "Chaetura pelagica",
        "Archilochus colubris",
        "Rallus crepitans",
        "Porzana carolina",
        "Gallinula galeata",
        "Fulica atra",
        "Fulica americana",
        "Porphyrio martinicus",
        "Aramus guarauna",
        "Antigone canadensis",
        "Callipepla californica",
        "Himantopus mexicanus",
        "Recurvirostra americana",
        "Haematopus palliatus",
        "Vanellus vanellus",
        "Pluvialis squatarola",
        "Pluvialis dominica",
        "Charadrius vociferus",
        "Charadrius semipalmatus",
        "Charadrius melodus",
        "Charadrius montanus",
        "Numenius phaeopus",
        "Arenaria interpres",
        "Calidris himantopus",
        "Calidris alba",
        "Calidris alpina",
        "Calidris maritima",
        "Calidris minutilla",
        "Calidris fuscicollis",
        "Calidris subruficollis",
        "Calidris melanotos",
        "Calidris pusilla",
        "Limnodromus griseus",
        "Limnodromus scolopaceus",
        "Scolopax minor",
        "Gallinago delicata",
        "Actitis macularius",
        "Tringa solitaria",
        "Tringa flavipes",
        "Tringa semipalmata",
        "Tringa melanoleuca",
        "Phalaropus lobatus",
        "Uria aalge",
        "Alca torda",
        "Cepphus grylle",
        "Fratercula arctica",
        "Chroicocephalus philadelphia",
        "Leucophaeus atricilla",
        "Larus delawarensis",
        "Larus argentatus",
        "Larus glaucoides",
        "Larus marinus",
        "Sternula antillarum",
        "Hydroprogne caspia",
        "Chlidonias niger",
        "Sterna dougallii",
        "Sterna hirundo",
        "Sterna paradisaea",
        "Vireo bellii",
        "Sterna forsteri",
        "Thalasseus maximus",
        "Thalasseus sandvicensis",
        "Rynchops niger",
        "Gavia stellata",
        "Gavia immer",
        "Oceanites oceanicus",
        "Fulmarus glacialis",
        "Mycteria americana",
        "Fregata magnificens",
        "Morus bassanus",
        "Anhinga anhinga",
        "Phalacrocorax carbo",
        "Nannopterum auritum",
        "Pelecanus erythrorhynchos",
        "Pelecanus occidentalis",
        "Botaurus lentiginosus",
        "Ardea herodias",
        "Ardea cinerea",
        "Ardea alba",
        "Egretta thula",
        "Egretta caerulea",
        "Egretta tricolor",
        "Egretta rufescens",
        "Bubulcus ibis",
        "Butorides virescens",
        "Nycticorax nycticorax",
        "Nyctanassa violacea",
        "Eudocimus albus",
        "Plegadis falcinellus",
        "Platalea ajaja",
        "Coragyps atratus",
        "Cathartes aura",
        "Pandion haliaetus",
        "Circus hudsonius",
        "Accipiter striatus",
        "Accipiter cooperii",
        "Haliaeetus leucocephalus",
        "Haliaeetus pelagicus",
        "Buteo lineatus",
        "Buteo platypterus",
        "Buteo jamaicensis",
        "Buteo lagopus",
        "Megascops asio",
        "Bubo virginianus",
        "Bubo scandiacus",
        "Strix varia",
        "Asio otus",
        "Megaceryle alcyon",
        "Melanerpes erythrocephalus",
        "Melanerpes carolinus",
        "Sphyrapicus varius",
        "Dryobates pubescens",
        "Dryobates villosus",
        "Colaptes auratus",
        "Dryocopus pileatus",
        "Falco sparverius",
        "Falco columbarius",
        "Falco peregrinus",
        "Myiopsitta monachus",
        "Myiarchus crinitus",
        "Tyrannus verticalis",
        "Tyrannus tyrannus",
        "Contopus virens",
        "Empidonax virescens",
        "Empidonax traillii",
        "Sayornis phoebe",
        "Vireo griseus",
        "Vireo flavifrons",
        "Vireo solitarius",
        "Vireo gilvus",
        "Vireo olivaceus",
        "Lanius ludovicianus",
        "Cyanocitta cristata",
        "Aphelocoma coerulescens",
        "Corvus brachyrhynchos",
        "Corvus ossifragus",
        "Corvus corax",
        "Poecile atricapillus",
        "Baeolophus bicolor",
        "Eremophila alpestris",
        "Riparia riparia",
        "Tachycineta bicolor",
        "Progne subis",
        "Hirundo rustica",
        "Corthylio calendula",
        "Regulus satrapa",
        "Bombycilla garrulus",
        "Bombycilla cedrorum",
        "Sitta canadensis",
        "Sitta carolinensis",
        "Sitta pusilla",
        "Certhia americana",
        "Polioptila caerulea",
        "Troglodytes aedon",
        "Cistothorus palustris",
        "Thryothorus ludovicianus",
        "Dumetella carolinensis",
        "Toxostoma rufum",
        "Oreoscoptes montanus",
        "Mimus gundlachii",
        "Mimus polyglottos",
        "Sturnus vulgaris",
        "Sialia sialis",
        "Myadestes townsendi",
        "Catharus fuscescens",
        "Catharus minimus",
        "Limosa fedoa",
        "Catharus ustulatus",
        "Tyrannus dominicensis",
        "Catharus guttatus",
        "Hylocichla mustelina",
        "Turdus migratorius",
        "Passer domesticus",
        "Coccothraustes vespertinus",
        "Haemorhous mexicanus",
        "Haemorhous purpureus",
        "Loxia curvirostra",
        "Spinus tristis",
        "Plectrophenax nivalis",
        "Spizella passerina",
        "Spizella pusilla",
        "Passerella iliaca",
        "Spizelloides arborea",
        "Junco hyemalis",
        "Zonotrichia leucophrys",
        "Zonotrichia albicollis",
        "Passerculus sandwichensis",
        "Melospiza melodia",
        "Melospiza lincolnii",
        "Melospiza georgiana",
        "Pipilo chlorurus",
        "Pipilo erythrophthalmus",
        "Xanthocephalus xanthocephalus",
        "Dolichonyx oryzivorus",
        "Sturnella magna",
        "Icterus spurius",
        "Icterus galbula",
        "Agelaius phoeniceus",
        "Molothrus ater",
        "Euphagus carolinus",
        "Quiscalus quiscula",
        "Quiscalus major",
        "Seiurus aurocapilla",
        "Helmitheros vermivorum",
        "Parkesia noveboracensis",
        "Vermivora cyanoptera",
        "Mniotilta varia",
        "Protonotaria citrea",
        "Limnothlypis swainsonii",
        "Leiothlypis peregrina",
        "Leiothlypis celata",
        "Leiothlypis ruficapilla",
        "Geothlypis tolmiei",
        "Geothlypis formosa",
        "Geothlypis trichas",
        "Setophaga citrina",
        "Setophaga ruticilla",
        "Setophaga tigrina",
        "Setophaga cerulea",
        "Setophaga americana",
        "Setophaga magnolia",
        "Setophaga castanea",
        "Setophaga fusca",
        "Setophaga petechia",
        "Setophaga pensylvanica",
        "Setophaga striata",
        "Setophaga caerulescens",
        "Setophaga palmarum",
        "Setophaga pinus",
        "Setophaga coronata",
        "Setophaga dominica",
        "Setophaga discolor",
        "Setophaga virens",
        "Cardellina canadensis",
        "Cardellina pusilla",
        "Piranga rubra",
        "Piranga olivacea",
        "Piranga ludoviciana",
        "Cardinalis cardinalis",
        "Pheucticus ludovicianus",
        "Passerina caerulea",
        "Passerina cyanea",
        "Passerina ciris",
        "Spiza americana"
    ],
    "Maggie": [
            /* ... Maggie's bird names ... */
        "Ammospiza caudacuta",
        "Recurvirostra americana",
        "Botaurus lentiginosus",
        "Anas rubripes",
        "Fulica americana",
        "Corvus brachyrhynchos",
        "Pluvialis dominica",
        "Spinus tristis",
        "Callipepla californica",
        "Falco sparverius",
        "Haematopus palliatus",
        "Setophaga ruticilla",
        "Turdus migratorius",
        "Spizelloides arborea",
        "Colinus virginianus",
        "Pelecanus erythrorhynchos",
        "Porphyrio martinica",
        "Mareca americana",
        "Tyrannus dominicensis",
        "Scolopax minor",
        "Anhinga anhinga",
        "Sterna paradisaea",
        "Fratercula arctica",
        "Mimus gundlachii",
        "Haliaeetus leucocephalus",
        "Icterus galbula",
        "Riparia riparia",
        "Hirundo rustica",
        "Branta leucopsis",
        "Strix varia",
        "Bucephala islandica",
        "Setophaga castanea",
        "Megaceryle alcyon",
        "Cepphus grylle",
        "Melanitta americana",
        "Rynchops niger",
        "Chlidonias niger",
        "Coragyps atratus",
        "Mniotilta varia",
        "Pluvialis squatarola",
        "Dendrocygna autumnalis",
        "Coccyzus erythropthalmus",
        "Poecile atricapillus",
        "Nycticorax nycticorax",
        "Himantopus mexicanus",
        "Setophaga caerulescens",
        "Setophaga virens",
        "Setophaga fusca",
        "Setophaga striata",
        "Passerina caerulea",
        "Cyanocitta cristata",
        "Polioptila caerulea",
        "Vireo solitarius",
        "Spatula discors",
        "Quiscalus major",
        "Dolichonyx oryzivorus",
        "Bombycilla garrulus",
        "Chroicocephalus philadelphia",
        "Branta bernicla",
        "Buteo platypterus",
        "Certhia americana",
        "Pelecanus occidentalis",
        "Toxostoma rufum",
        "Molothrus ater",
        "Sitta pusilla",
        "Calidris subruficollis",
        "Bucephala albeola",
        "Branta canadensis",
        "Cardellina canadensis",
        "Aythya valisineria",
        "Setophaga tigrina",
        "Thryothorus ludovicianus",
        "Hydroprogne caspia",
        "Columbina passerina",
        "Bubulcus ibis",
        "Bombycilla cedrorum",
        "Setophaga cerulea",
        "Setophaga pensylvanica",
        "Chaetura pelagica",
        "Spizella passerina",
        "Rallus crepitans",
        "Somateria mollissima",
        "Gallinula galeata",
        "Bucephala clangula",
        "Quiscalus quiscula",
        "Larus canus",
        "Gavia immer",
        "Mergus merganser",
        "Gallinula chloropus",
        "Uria aalge",
        "Chordeiles minor",
        "Corvus corax",
        "Geothlypis trichas",
        "Accipiter cooperii",
        "Junco hyemalis",
        "Spiza americana",
        "Nannopterum auritum",
        "Dryobates pubescens",
        "Calidris alpina",
        "Sialia sialis",
        "Tyrannus tyrannus",
        "Sturnella magna",
        "Sayornis phoebe",
        "Megascops asio",
        "Pipilo erythrophthalmus",
        "Contopus virens",
        "Streptopelia decaocto",
        "Mareca penelope",
        "Sturnus vulgaris",
        "Coccothraustes vespertinus",
        "Limosa fedoa",
        "Spizella pusilla",
        "Corvus ossifragus",
        "Aphelocoma coerulescens",
        "Sterna forsteri",
        "Passerella iliaca",
        "Dendrocygna bicolor",
        "Mareca strepera",
        "Plegadis falcinellus",
        "Regulus satrapa",
        "Dumetella carolinensis",
        "Catharus minimus",
        "Anser anser",
        "Larus marinus",
        "Ardea herodias",
        "Phalacrocorax carbo",
        "Myiarchus crinitus",
        "Ardea alba",
        "Bubo virginianus",
        "Aythya marila",
        "Anser albifrons",
        "Tringa melanoleuca",
        "Butorides virescens",
        "Pipilo chlorurus",
        "Anas crecca",
        "Dryobates villosus",
        "Histrionicus histrionicus",
        "Catharus guttatus",
        "Larus argentatus",
        "Lophodytes cucullatus",
        "Setophaga citrina",
        "Podiceps auritus",
        "Eremophila alpestris",
        "Haemorhous mexicanus",
        "Passer domesticus",
        "Troglodytes aedon",
        "Larus glaucoides",
        "Passerina cyanea",
        "Geothlypis formosa",
        "Charadrius vociferus",
        "Leucophaeus atricilla",
        "Calidris minutilla",
        "Sternula antillarum",
        "Aythya affinis",
        "Tringa flavipes",
        "Aramus guarauna",
        "Melospiza lincolnii",
        "Egretta caerulea",
        "Tyrannus caudifasciatus",
        "Limnodromus scolopaceus",
        "Asio otus",
        "Clangula hyemalis",
        "Geothlypis tolmiei",
        "Fregata magnificens",
        "Setophaga magnolia",
        "Anas platyrhynchos",
        "Cistothorus palustris",
        "Falco columbarius",
        "Myiopsitta monachus",
        "Anas fulvigula",
        "Charadrius montanus",
        "Zenaida macroura",
        "Cygnus olor",
        "Leiothlypis ruficapilla",
        "Cardinalis cardinalis",
        "Colaptes auratus",
        "Fulmarus glacialis",
        "Morus bassanus",
        "Circus hudsonius",
        "Mimus polyglottos",
        "Setophaga americana",
        "Anas acuta",
        "Spatula clypeata",
        "Parkesia noveboracensis",
        "Leiothlypis celata",
        "Icterus spurius",
        "Pandion haliaetus",
        "Seiurus aurocapilla",
        "Passerina ciris",
        "Setophaga palmarum",
        "Calidris melanotos",
        "Falco peregrinus",
        "Podilymbus podiceps",
        "Dryocopus pileatus",
        "Setophaga pinus",
        "Anser brachyrhynchus",
        "Charadrius melodus",
        "Setophaga discolor",
        "Protonotaria citrea",
        "Haemorhous purpureus",
        "Porphyrio martinicus",
        "Progne subis",
        "Calidris maritima",
        "Alca torda",
        "Loxia curvirostra",
        "Melanerpes carolinus",
        "Mergus serrator",
        "Sitta canadensis",
        "Vireo olivaceus",
        "Melanerpes erythrocephalus",
        "Phalaropus lobatus",
        "Buteo lineatus",
        "Buteo jamaicensis",
        "Gavia stellata",
        "Agelaius phoeniceus",
        "Egretta rufescens",
        "Aythya americana",
        "Larus delawarensis",
        "Aythya collaris",
        "Rallus limicola",
        "Columba livia",
        "Vireo bellii",
        "Pheucticus ludovicianus",
        "Platalea ajaja",
        "Buteo lagopus",
        "Thalasseus maximus",
        "Corthylio calendula",
        "Archilochus colubris",
        "Oxyura jamaicensis",
        "Arenaria interpres",
        "Euphagus carolinus",
        "Oreoscoptes montanus",
        "Ammospiza caudacuta",
        "Calidris alba",
        "Antigone canadensis",
        "Thalasseus sandvicensis",
        "Passerculus sandwichensis",
        "Piranga olivacea",
        "Charadrius semipalmatus",
        "Calidris pusilla",
        "Accipiter striatus",
        "Plectrophenax nivalis",
        "Anser caerulescens",
        "Egretta thula",
        "Bubo scandiacus",
        "Tringa solitaria",
        "Melospiza melodia",
        "Porzana carolina",
        "Actitis macularius",
        "Haliaeetus pelagicus",
        "Calidris himantopus",
        "Piranga rubra",
        "Melanitta perspicillata",
        "Catharus ustulatus",
        "Limnothlypis swainsonii",
        "Melospiza georgiana",
        "Leiothlypis peregrina",
        "Myadestes townsendi",
        "Tachycineta bicolor",
        "Egretta tricolor",
        "Cygnus buccinator",
        "Baeolophus bicolor",
        "Cathartes aura",
        "Catharus fuscescens",
        "Vireo gilvus",
        "Tyrannus verticalis",
        "Piranga ludoviciana",
        "Numenius phaeopus",
        "Eudocimus albus",
        "Sitta carolinensis",
        "Zonotrichia leucophrys",
        "Vireo griseus",
        "Calidris fuscicollis",
        "Zonotrichia albicollis",
        "Zenaida asiatica",
        "Melanitta deglandi",
        "Meleagris gallopavo",
        "Tringa semipalmata",
        "Empidonax traillii",
        "Gallinago delicata",
        "Oceanites oceanicus",
        "Cardellina pusilla",
        "Aix sponsa",
        "Mycteria americana",
        "Hylocichla mustelina",
        "Helmitheros vermivorum",
        "Setophaga petechia",
        "Sphyrapicus varius",
        "Coccyzus americanus",
        "Nyctanassa violacea",
        "Xanthocephalus xanthocephalus",
        "Setophaga coronata",
        "Vireo flavifrons",
        "Setophaga dominica",
        "Columbina inca"

        ],
    "Timothy": [
                /* ... Timothy's bird names ... */
        "Ammospiza caudacuta",
        "Dendrocygna autumnalis",
        "Dendrocygna bicolor",
        "Anser caerulescens",
        "Anser rossii",
        "Anser anser",
        "Anser brachyrhynchus",
        "Branta bernicla",
        "Branta leucopsis",
        "Branta canadensis",
        "Cygnus olor",
        "Alopochen aegyptiaca",
        "Aix sponsa",
        "Spatula discors",
        "Spatula clypeata",
        "Mareca strepera",
        "Mareca penelope",
        "Mareca americana",
        "Anas platyrhynchos",
        "Anas rubripes",
        "Anas fulvigula",
        "Anas acuta",
        "Anas crecca",
        "Aythya valisineria",
        "Aythya ferina",
        "Aythya collaris",
        "Aythya fuligula",
        "Aythya marila",
        "Aythya affinis",
        "Somateria mollissima",
        "Histrionicus histrionicus",
        "Melanitta perspicillata",
        "Melanitta deglandi",
        "Melanitta americana",
        "Clangula hyemalis",
        "Columbina inca",
        "Bucephala albeola",
        "Colinus virginianus",
        "Bucephala clangula",
        "Lophodytes cucullatus",
        "Mergus serrator",
        "Meleagris gallopavo",
        "Podilymbus podiceps",
        "Podiceps auritus",
        "Columba livia",
        "Streptopelia decaocto",
        "Zenaida asiatica",
        "Zenaida macroura",
        "Coccyzus americanus",
        "Coccyzus erythropthalmus",
        "Chordeiles minor",
        "Chaetura pelagica",
        "Archilochus colubris",
        "Rallus crepitans",
        "Porzana carolina",
        "Gallinula galeata",
        "Fulica atra",
        "Fulica americana",
        "Porphyrio martinicus",
        "Aramus guarauna",
        "Antigone canadensis",
        "Himantopus mexicanus",
        "Recurvirostra americana",
        "Haematopus palliatus",
        "Pluvialis squatarola",
        "Pluvialis dominica",
        "Tyrannus dominicensis",
        "Charadrius vociferus",
        "Charadrius semipalmatus",
        "Charadrius melodus",
        "Charadrius montanus",
        "Arenaria interpres",
        "Calidris himantopus",
        "Calidris alba",
        "Calidris alpina",
        "Calidris minutilla",
        "Calidris pusilla",
        "Limnodromus griseus",
        "Limnodromus scolopaceus",
        "Gallinago delicata",
        "Actitis macularius",
        "Tringa solitaria",
        "Tringa flavipes",
        "Tringa semipalmata",
        "Tringa melanoleuca",
        "Uria aalge",
        "Alca torda",
        "Cepphus grylle",
        "Fratercula arctica",
        "Chroicocephalus philadelphia",
        "Leucophaeus atricilla",
        "Larus delawarensis",
        "Larus argentatus",
        "Larus marinus",
        "Sternula antillarum",
        "Vireo bellii",
        "Hydroprogne caspia",
        "Sterna dougallii",
        "Sterna hirundo",
        "Callipepla californica",
        "Sterna paradisaea",
        "Sterna forsteri",
        "Thalasseus maximus",
        "Thalasseus sandvicensis",
        "Rynchops niger",
        "Gavia stellata",
        "Gavia immer",
        "Oceanites oceanicus",
        "Fulmarus glacialis",
        "Mycteria americana",
        "Morus bassanus",
        "Anhinga anhinga",
        "Nannopterum auritum",
        "Pelecanus erythrorhynchos",
        "Pelecanus occidentalis",
        "Botaurus lentiginosus",
        "Ardea herodias",
        "Ardea cinerea",
        "Ardea alba",
        "Columbina passerina",
        "Egretta thula",
        "Egretta caerulea",
        "Egretta tricolor",
        "Egretta rufescens",
        "Bubulcus ibis",
        "Butorides virescens",
        "Nycticorax nycticorax",
        "Nyctanassa violacea",
        "Eudocimus albus",
        "Plegadis falcinellus",
        "Platalea ajaja",
        "Cathartes aura",
        "Pandion haliaetus",
        "Circus hudsonius",
        "Accipiter striatus",
        "Accipiter cooperii",
        "Haliaeetus leucocephalus",
        "Buteo lineatus",
        "Buteo platypterus",
        "Buteo jamaicensis",
        "Bubo scandiacus",
        "Strix varia",
        "Megaceryle alcyon",
        "Melanerpes carolinus",
        "Sphyrapicus varius",
        "Dryobates pubescens",
        "Dryobates villosus",
        "Colaptes auratus",
        "Dryocopus pileatus",
        "Falco sparverius",
        "Falco columbarius",
        "Falco peregrinus",
        "Tyrannus tyrannus",
        "Empidonax traillii",
        "Sayornis phoebe",
        "Vireo griseus",
        "Vireo flavifrons",
        "Vireo solitarius",
        "Vireo gilvus",
        "Vireo olivaceus",
        "Lanius ludovicianus",
        "Cyanocitta cristata",
        "Aphelocoma coerulescens",
        "Corvus brachyrhynchos",
        "Corvus ossifragus",
        "Corvus corax",
        "Poecile atricapillus",
        "Baeolophus bicolor",
        "Riparia riparia",
        "Tachycineta bicolor",
        "Progne subis",
        "Hirundo rustica",
        "Corthylio calendula",
        "Regulus satrapa",
        "Bombycilla garrulus",
        "Bombycilla cedrorum",
        "Sitta canadensis",
        "Sitta carolinensis",
        "Certhia americana",
        "Troglodytes aedon",
        "Cistothorus palustris",
        "Thryothorus ludovicianus",
        "Dumetella carolinensis",
        "Toxostoma rufum",
        "Oreoscoptes montanus",
        "Mimus gundlachii",
        "Mimus polyglottos",
        "Sturnus vulgaris",
        "Sialia sialis",
        "Catharus fuscescens",
        "Catharus minimus",
        "Catharus ustulatus",
        "Hylocichla mustelina",
        "Turdus migratorius",
        "Passer domesticus",
        "Haemorhous mexicanus",
        "Haemorhous purpureus",
        "Loxia curvirostra",
        "Spinus tristis",
        "Plectrophenax nivalis",
        "Spizella passerina",
        "Spizella pusilla",
        "Junco hyemalis",
        "Zonotrichia leucophrys",
        "Zonotrichia albicollis",
        "Passerculus sandwichensis",
        "Melospiza melodia",
        "Melospiza georgiana",
        "Pipilo erythrophthalmus",
        "Dolichonyx oryzivorus",
        "Icterus spurius",
        "Icterus galbula",
        "Agelaius phoeniceus",
        "Molothrus ater",
        "Quiscalus quiscula",
        "Quiscalus major",
        "Seiurus aurocapilla",
        "Helmitheros vermivorum",
        "Parkesia motacilla",
        "Parkesia noveboracensis",
        "Vermivora cyanoptera",
        "Mniotilta varia",
        "Protonotaria citrea",
        "Leiothlypis peregrina",
        "Leiothlypis celata",
        "Leiothlypis ruficapilla",
        "Geothlypis tolmiei",
        "Geothlypis formosa",
        "Geothlypis trichas",
        "Setophaga citrina",
        "Setophaga ruticilla",
        "Setophaga tigrina",
        "Setophaga americana",
        "Setophaga magnolia",
        "Setophaga castanea",
        "Setophaga fusca",
        "Setophaga petechia",
        "Setophaga pensylvanica",
        "Setophaga striata",
        "Setophaga caerulescens",
        "Setophaga palmarum",
        "Setophaga pinus",
        "Setophaga coronata",
        "Porphyrio martinica",
        "Limosa fedoa",
        "Setophaga dominica",
        "Setophaga virens",
        "Cardellina canadensis",
        "Cardellina pusilla",
        "Piranga rubra",
        "Piranga olivacea",
        "Piranga ludoviciana",
        "Cardinalis cardinalis",
        "Pheucticus ludovicianus",
        "Passerina caerulea",
        "Passerina cyanea",
        "Passerina ciris",
        "Spiza americana"                
        ]
};
