with open('src/app/raw.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Inject a targeted CSS fix right after the opening of the raw html
# This fixes the footer__child-top to be a proper grid, and aligns COMPANY with other columns
CSS_FIX = """<style>
  /* Fix: Footer child-top must be a flex/grid row so COMPANY aligns with other columns */
  .footer__child-top {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)) !important;
    gap: 40px !important;
    align-items: start !important;
    width: 100% !important;
  }

  /* Make sure COMPANY column doesn't break to its own row */
  .footer__column {
    display: flex !important;
    flex-direction: column !important;
    gap: 0 !important;
  }

  /* Prevent any accidental block-level breaks */
  .footer__column.is--logo {
    grid-column: 1 / -1 !important;
    margin-bottom: 24px !important;
  }

  @media (min-width: 768px) {
    .footer__column.is--logo {
      grid-column: auto !important;
      margin-bottom: 0 !important;
    }

    .footer__child-top {
      grid-template-columns: 1.5fr repeat(4, 1fr) !important;
    }
  }
</style>
"""

# Find the first position right before the page-wrapper starts
insert_at = c.find('<div class="page-wrapper">')
if insert_at == -1:
    print('ERROR: page-wrapper not found')
    exit(1)

c = c[:insert_at] + CSS_FIX + c[insert_at:]

with open('src/app/raw.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('CSS fix injected. New size:', len(c))
