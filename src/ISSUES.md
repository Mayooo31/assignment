# Issues

1. Kazdy item by mel mit unikatni ID , proto kdyz vymazu jeden item se stejnym ID jako ma druhy item tak se smazou oba.
2. Key v children.has_nemesis.records a children.has_secrete.records je podle me zbytecne. stacilo by children.records abych nemusel predem vedet jak se key jmenuje.
3. Pak co se tyce kodu, pro vytvoreni hiearchie jsem pouzil tables, vim ze jsem to neudelal uplne spravne. V jednom tablu ma byt po spravnosti jeden tableHead a proto kdyz expandnu child tak to neni uplne optimalni.
4. Pak jsem vytvoril slozky pro medium-size projekt, tak jak vetsinou pouzivam. Urcite pro medium projekt to byva o hodne komplexnejsi ale s vetsima projektama nemam zkusenosti.
5. Pak ohledne funkce deleteCharacter snazil jsem se to co nejefektivneji napsat, vim ze urcite by se to dalo zlepsit treba me napadlo pouzit rekurzi, kdyby jak uz jsem zminoval json data byli takhle children.records tim padem bych nemusel znat keys jako has_nemesis a mohl bych vyvolavat funkci do te doby nez by nebyli k dispozici zadne dalsi childs.
