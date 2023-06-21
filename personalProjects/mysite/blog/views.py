from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Post
from django.views.generic.edit import DeleteView
from django.urls import reverse_lazy
from django.http import HttpResponse
from .forms import RegistrationForm

@login_required
def post_list(request):
    posts = Post.objects.all().order_by('-publish_date')
    return render(request, 'blog/post_list.html', {'posts': posts})
    #return HttpResponse("In the works")

#@login_required
def post_detail(request, id):
    post = Post.objects.get(id=id)
    return render(request, 'blog/post_detail.html', {'post': post})

@login_required
def post_new(request):
    if request.method == "POST":
        post = Post()
        post.title = request.POST['title']
        post.content = request.POST['content']
        post.author = request.user
        post.save()
        return redirect('post_detail', id=post.id)
    else:
        return render(request, 'blog/post_edit.html')

@login_required
def post_edit(request, id):
    post = Post.objects.get(id=id)
    if request.method == "POST":
        post.title = request.POST['title']
        post.content = request.POST['content']
        post.save()
        return redirect('post_detail', id=post.id)
    else:
        return render(request, 'blog/post_edit.html', {'post': post})

class PostDeleteView(DeleteView):
    model = Post
    success_url = reverse_lazy('post_list')
    template_name = 'blog/post_confirm_delete.html'

# views.py

from django.shortcuts import render, redirect
from .forms import RegistrationForm

def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')  # or wherever you want to redirect after registration
    else:
        form = RegistrationForm()
    return render(request, 'registration/register.html', {'form': form})
