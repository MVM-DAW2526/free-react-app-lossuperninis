#!/bin/bash
# ============================================================
# check_autoavaluacio.sh
# Comprova que l'autoavaluació individual hagi estat completada.
# Detecta si l'alumne ha omplert els camps o ha deixat els
# placeholders del template.
# ============================================================

FILE="docs/autoavaluacio.md"

# --- Existència del fitxer ---
if [ ! -f "$FILE" ]; then
  echo "❌ Fitxer $FILE no trobat"
  echo "   Cal copiar la plantilla docs/autoavaluacio.md i completar-la"
  exit 1
fi

SIZE=$(wc -c < "$FILE")
echo "Mida del fitxer: $SIZE caràcters"

# --- Comptar placeholders sense omplir ---
PLACEHOLDERS=$(grep -c "\[Escriu aquí\]" "$FILE" 2>/dev/null || echo 0)
echo "Camps '[Escriu aquí]' sense completar: $PLACEHOLDERS"

# --- Comprovar camps de dades personals ---
NOM=$(grep "Nom i cognoms" "$FILE" | grep -v "^\*\*Nom i cognoms:\*\*$" | wc -l)
echo "Camp 'Nom i cognoms' completat: $([ "$NOM" -gt 0 ] && echo 'SÍ' || echo 'NO')"

# --- Comprovar commits referenciats ---
COMMITS=$(grep -c "commit:" "$FILE" 2>/dev/null || echo 0)
echo "Commits referenciats: $COMMITS"

echo ""

# --- Avaluació ---
ERRORS=0

if [ "$SIZE" -lt 600 ]; then
  echo "❌ Autoavaluació massa curta ($SIZE caràcters). Cal completar tots els apartats"
  ERRORS=$((ERRORS + 1))
else
  echo "✅ Longitud suficient"
fi

if [ "$PLACEHOLDERS" -gt 3 ]; then
  echo "❌ Massa camps sense completar ($PLACEHOLDERS placeholders '[Escriu aquí]' restants)"
  ERRORS=$((ERRORS + 1))
else
  echo "✅ La majoria dels camps han estat completats"
fi

echo ""
echo "--- Resultat ---"
if [ $ERRORS -eq 0 ]; then
  echo "OK - Autoavaluació completada"
  exit 0
else
  echo "ERRORS: $ERRORS problemes detectats a l'autoavaluació"
  echo "Completeu el fitxer docs/autoavaluacio.md abans de lliurar"
  exit 1
fi
