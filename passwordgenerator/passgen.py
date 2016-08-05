def passgenerator(size,chars):
    size = input("adaugati o valoare listei")
    chars = string.ascii_uppercase + string.digits + "!@#$%^&*()_+{}|].,:;"
    return ''.join(random.choice(chars) for _ in range(size))

