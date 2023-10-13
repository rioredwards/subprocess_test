from javascript.index import run


def format_rich_text(proj, name):
    entity = getattr(proj, name)
    markdown = run(entity)
    return markdown
