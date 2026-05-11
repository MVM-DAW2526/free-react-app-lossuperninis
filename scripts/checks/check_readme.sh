#!/bin/bash
# ============================================================
# check_readme.sh
# Comprova que el README.md:
#   1. Existeix i té contingut suficient
#   2. Conté una URL de Vercel (*.vercel.app)
#   3. Conté la URL del repositori GitHub
# ============================================================

ERRORS=0

# --- 1. Existència i mida del README ---
if [ ! -f "README.md" ]; then
  echo "❌ README.md no trobat"
  exit 1
fi

SIZE=$(wc -c < README.md)
echo "Mida del README.md: $SIZE caràcters"

if [ "$SIZE" -lt 300 ]; then
  echo "❌ README.md massa curt ($SIZE caràcters). Cal documentar el projecte (mínim 300 caràcters)"
  ERRORS=$((ERRORS + 1))
else
  echo "✅ README.md té contingut suficient"
fi

# --- 2. URL de Vercel ---
echo ""
if grep -qi "vercel\.app" README.md; then
  VERCEL_URL=$(grep -oi "https://[a-z0-9._-]*vercel\.app[^ ]*" README.md | head -1)
  echo "✅ URL de Vercel trobada: $VERCEL_URL"
else
  echo "❌ No s'ha trobat cap URL de Vercel (*.vercel.app) al README.md"
  echo "   Afegiu l'URL de producció: https://nom-projecte.vercel.app"
  ERRORS=$((ERRORS + 1))
fi

# --- 3. Seccions mínimes del README ---
echo ""
for section in "## " "###"; do
  COUNT=$(grep -c "^$section" README.md 2>/dev/null || echo 0)
  echo "Seccions trobades ($section): $COUNT"
done

echo ""
echo "--- Resultat ---"
if [ $ERRORS -eq 0 ]; then
  echo "OK - README completat correctament"
  exit 0
else
  echo "ERRORS: $ERRORS problemes detectats al README.md"
  exit 1
fi
